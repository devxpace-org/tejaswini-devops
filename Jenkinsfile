pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                git url: 'https://github.com/devxpace-org/tejaswini-devops'
              
                sh 'docker build -t harshitha .'
                sh 'docker tag tejaswini tejaswini8790/harshitha'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: '2feadac9-6d60-4d5e-b7cc-09104576ae76', passwordVariable: 'DOCKER_HUB_PASSWORD', usernameVariable: 'DOCKER_HUB_USERNAME')]) {
                    sh 'docker login -u $DOCKER_HUB_USERNAME -p $DOCKER_HUB_PASSWORD'
                }
                sh 'docker push tejaswini8790/harshitha'
            }
        }
    }
}
