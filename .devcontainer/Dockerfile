FROM php:8.4-fpm

# Set working directory
WORKDIR /workspace

# Copy existing application directory contents
COPY ./backend .

# Set permissions
RUN mkdir -p /workspace/backend/storage /workspace/backend/bootstrap/cache \
  && chown -R www-data:www-data /workspace/backend \
  && chmod -R 775 /workspace/backend/storage /workspace/backend/bootstrap/cache

# Copy existing application directory contents
COPY ./frontend .



