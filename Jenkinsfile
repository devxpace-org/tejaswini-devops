pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                // Clone the repository containing the Dockerfile
                git 'https://github.com/devxpace-org/tejaswini-devops'

                // Build the Docker image
                sh 'docker build -t jenkinsimage .'

                // Tag the image with the Docker Hub repository name
                sh 'docker tag jenkinsimage tejaswini8790/jenkinsimage'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                // Log in to Docker Hub
                sh 'sudo chmod 666 /var/run/docker.sock'
                withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', passwordVariable: 'Tejaswini9@', usernameVariable: 'tejaswini8790')]) {
                    sh 'docker login -u $tejaswini8790 -p $Tejaswini9@'
                }

                // Push the Docker image to Docker Hub
                sh 'docker push tejaswini8790/jenkinsimage'
            }
        }
    }
}