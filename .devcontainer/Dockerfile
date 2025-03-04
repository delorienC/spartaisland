FROM ubuntu:latest

RUN apt-get update && \
  apt-get install -y \
  software-properties-common \
  && add-apt-repository ppa:ondrej/php \
  && apt-get update \
  && apt-get install -y \
  php8.4 \
  php8.4-cli \
  php8.4-mbstring \
  php8.4-xml \
  php8.4-bcmath \
  php8.4-curl \
  php8.4-mysql \
  php8.4-tokenizer \
  php8.4-zip \
  php8.4-intl \
  unzip \
  curl \
  git \
  nodejs \
  npm \
  composer \
  && apt-get clean
