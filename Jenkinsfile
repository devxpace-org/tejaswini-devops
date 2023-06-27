pipeline {
    agent any

    stages {
        stage('Build') {
            steps { 
              
                // Clone the repository containing the Dockerfile
                git url: 'https://github.com/devxpace-org/tejaswini-devops'
                sh 'sudo chmod 666 /var/run/docker.sock'
                // Build the Docker image
                sh 'docker build -t helloimage .'

                // Tag the image with the Docker Hub repository name
                sh 'docker tag helloimage tejaswini8790/helloimage'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                // Log in to Docker Hub
                withCredentials([usernamePassword(credentialsId: '2feadac9-6d60-4d5e-b7cc-09104576ae76', passwordVariable: 'DOCKER_HUB_PASSWORD', usernameVariable: 'DOCKER_HUB_USERNAME')]) {
                    sh 'docker login -u $DOCKER_HUB_USERNAME -p $DOCKER_HUB_PASSWORD'
                }

                // Push the Docker image to Docker Hub
                sh 'docker push tejaswini8790/helloimage'
            }
        }
    }
}
