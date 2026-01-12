# ============================================
# Багатоетапна збірка для React/Vite додатку
# ============================================

# Етап 1: Збірка
FROM node:20-alpine AS builder

WORKDIR /app

# Копіюємо файли залежностей
COPY package.json package-lock.json* pnpm-lock.yaml* bun.lockb* ./

# Встановлюємо залежності (підтримка npm, pnpm, bun)
RUN if [ -f pnpm-lock.yaml ]; then \
        corepack enable && pnpm install --frozen-lockfile; \
    elif [ -f bun.lockb ]; then \
        npm install -g bun && bun install --frozen-lockfile; \
    else \
        npm ci; \
    fi

# Копіюємо решту файлів проекту
COPY . .

# Аргументи збірки для змінних середовища
ARG VITE_FB_PIXEL_ID
ENV VITE_FB_PIXEL_ID=$VITE_FB_PIXEL_ID

# Збірка проекту
RUN if [ -f pnpm-lock.yaml ]; then \
        pnpm run build; \
    elif [ -f bun.lockb ]; then \
        bun run build; \
    else \
        npm run build; \
    fi

# ============================================
# Етап 2: Production (Nginx)
# ============================================
FROM nginx:alpine AS production

# Копіюємо власну конфігурацію Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копіюємо зібрані файли
COPY --from=builder /app/dist /usr/share/nginx/html

# Відкриваємо порт
EXPOSE 80

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

# Запуск Nginx
CMD ["nginx", "-g", "daemon off;"]
