FROM ubuntu:latest

# System aktualisieren und benötigte Pakete installieren
RUN apt-get update && \
  apt-get install -y \
  php \
  php-cli \
  php-mbstring \
  php-xml \
  php-bcmath \
  php-curl \
  php-mysql \
  php-tokenizer \
  php-zip \
  php-intl \
  unzip \
  curl \
  git \
  nodejs \
  npm \
  composer \
  && apt-get clean

# Setze die Standard-Arbeitsverzeichnis
#WORKDIR /var/www

# Ports für Laravel verfügbar machen
#EXPOSE 8000

# Befehl zum Starten des Laravel-Projekts (Ändere es nach Bedarf)
#CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
