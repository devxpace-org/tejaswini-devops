pipeline {
    agent any

    stages {
        stage('Build') {
<<<<<<< HEAD
            steps {
                
                git url: 'https://github.com/devxpace-org/tejaswini-devops'
                sh 'sudo chmod 666 /var/run/docker.sock'
                // Clone the repository containing the Dockerfile
                // Build the Docker image
                sh 'docker build -t helloworldimage .'
                
                // Tag the image with the Docker Hub repository name
                sh 'docker tag jenkinsimage tejaswini8790/helloworldimage'
=======
            steps { 
              
                // Clone the repository containing the Dockerfile
                git url: 'https://github.com/devxpace-org/tejaswini-devops'
               
                // Build the Docker image
                sh 'docker build -t nicejob .'
                sh 'docker tag nicejob tejaswini8790/nicejob'
                
>>>>>>> 9af92cb0a71f6febb9a8dbb8559093ef5d85ef09
            }
        }

        stage('Push to Docker Hub') {
            steps {
                // Log in to Docker Hub
                withCredentials([usernamePassword(credentialsId: '2feadac9-6d60-4d5e-b7cc-09104576ae76', passwordVariable: 'DOCKER_HUB_PASSWORD', usernameVariable: 'DOCKER_HUB_USERNAME')]) {
                    sh 'docker login -u $DOCKER_HUB_USERNAME -p $DOCKER_HUB_PASSWORD'
                }

                // Push the Docker image to Docker Hub
<<<<<<< HEAD
                sh 'docker push tejaswini8790/helloworldimage'
=======
                sh 'docker push tejaswini8790/nicejob'
>>>>>>> 9af92cb0a71f6febb9a8dbb8559093ef5d85ef09
            }
        }
    }
}
