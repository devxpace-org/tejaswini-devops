pipeline {
    agent any

    stages {
        stage('Build') {
            steps { 
              
                // Clone the repository containing the Dockerfile
                git url: 'https://github.com/devxpace-org/tejaswini-devops'
                
                // Build the Docker image
                sh 'docker build -t jenkinsimage .'

                // Tag the image with the Docker Hub repository name
                sh 'docker tag jenkinsimage tejaswini8790/jenkinsimage'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                // Log in to Docker Hub
                withCredentials([usernamePassword(credentialsId: '1659e3d9-e78c-4b77-8e6a-1f5dc947dc28', passwordVariable: 'DOCKER_HUB_PASSWORD', usernameVariable: 'DOCKER_HUB_USERNAME')]) {
                    sh 'docker login -u $DOCKER_HUB_USERNAME -p $DOCKER_HUB_PASSWORD'
                }

                // Push the Docker image to Docker Hub
                sh 'docker push tejaswini8790/jenkinsimage'
            }
        }
    }
}
