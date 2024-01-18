pipeline {
    agent any 

    environment {
        DOCKERHUB_CREDENTIALS = credentials('demohub')
    }

    stages {
        stage('SCM Checkout') {
            steps {
                sh 'rm -rf demo || true'  // Remove existing directory if it exists
                sh 'git clone https://github.com/sivadinesh8056622230/sample-nodejs.git '
                echo 'test1'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'test2'
                sh 'docker build -t dinesh0203/demo:latest .'

            }
        }

        stage('Login to DockerHub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'demohub', usernameVariable: 'DOCKERHUB_USERNAME', passwordVariable: 'DOCKERHUB_PASSWORD')]) {
                        sh "docker login -u dinesh0203 -p Dinesh@8056"
                    }
                    echo 'test3'
                }
            }
        }

        stage('Push Image') {
            steps {
                sh 'docker push dinesh0203/demo:latest'
            }
        }
    }

    post {
        always {
            sh 'docker logout'
        }
    }
}
