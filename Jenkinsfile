pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                git url: 'https://github.com/devxpace-org/tejaswini-devops'
                 sh 'docker build -t tejaswini8790/nicejob .'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: '40cc9f5f-04d1-471c-96ae-2b8312455818', passwordVariable: 'DOCKER_HUB_PASSWORD', usernameVariable: 'DOCKER_HUB_USERNAME')]) {
                    sh 'docker login -u $DOCKER_HUB_USERNAME -p $DOCKER_HUB_PASSWORD'
                    sh 'sudo chown root:docker /var/run/docker.sock'
                    sh 'sudo chmod 660 /var/run/docker.sock'

                }
                sh 'docker push tejaswini8790/nicejob'
            }
        }
    }
}
