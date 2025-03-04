FROM php:8.4-fpm

WORKDIR /var/www/html

RUN apt-get update && apt-get install -y \
  curl \
  git \
  unzip \
  zip \
  libpng-dev \
  libonig-dev \
  libxml2-dev \
  libzip-dev \
  libpq-dev \
  libicu-dev \
  libfreetype6-dev \
  libjpeg62-turbo-dev \
  libxslt-dev \
  libmemcached-dev \
  default-mysql-client \
  && docker-php-ext-install pdo_mysql pdo_pgsql mbstring exif pcntl bcmath gd zip intl opcache xsl xml zip

COPY --from=composer:2.7 /usr/bin/composer /usr/bin/composer

COPY . .

RUN mkdir -p /var/www/html/storage/framework/{sessions,cache,views} /var/www/html/bootstrap/cache \
  && chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache \
  && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

EXPOSE 9000
EXPOSE 3000

CMD ["php-fpm"]
