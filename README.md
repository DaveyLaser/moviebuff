[![Build Status](https://travis-ci.org/davepmiller/moviebuff.svg?branch=master)](https://travis-ci.org/davepmiller/moviebuff)
[![License](https://img.shields.io/badge/license-%20MIT-blue.svg)](../master/LICENSE)

# moviebuff

List your favorite movies!

See [Issues](https://github.com/DaveyLaser/moviebuff/issues) for upcoming bug fixes and features.

## Run Docker Image (path of least resistance)

1. Install Docker on Mac (skip this step if you already have docker installed):
    * [Download Docker](https://download.docker.com/mac/stable/Docker.dmg)
    * Click the downloaded *.dmg file
    * Drag the Docker icon on to the Applications folder
    * Open Docker from Launchpad
    * It will ask for your password, then you should be good to go

2. Start the Application:
    ```bash
    # Sanity check
    docker version

    # Run the image, pointing it's server to your localhost:8080
    docker run -p 8080:8080 davidpmiller/moviebuff:0.0.2
    ```

3. View in your browser: [localhost:8080](http://localhost:8080)

## Build From Source (not too bad, but more involved than Docker)

Install dependencies for Mac:

1. You'll need to install HomeBrew if you don't have that (OSX package manager)
    ```bash
    # Check if you have it
    brew -v
    ```
    * No? [Install HomeBrew!](https://brew.sh/)

2. Install Java
    ```bash
    # Sanity check, both java and javac should show some output
    java -version
    javac -version
    # No dice? No problem...
    brew cask install java
    ```

3. Install Maven
    ```bash
    # Check for existing
    mvn -version
    # Install if you don't have it
    brew install maven
    ```

4. Install Git
    ```bash
    git --version
    brew install git
    ```

5. Clone Repo
    ```bash
    git clone https://github.com/DaveyLaser/moviebuff.git
    ```

6. Build and run
    ```bash
    cd moviebuff
    mvn spring-boot:run
    ```
   
7. View in your browser: [localhost:8080](http://localhost:8080)
