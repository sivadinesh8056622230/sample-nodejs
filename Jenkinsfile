pipeline {
    agent any 

    environment {
        DOCKERHUB_CREDENTIALS = credentials('vinoth1310')
    }

    stages {
        stage('SCM Checkout') {
            steps {
                sh 'rm -rf projectdemo || true'  // Remove existing directory if it exists
                sh 'git clone https://github.com/Vinoth1310/devops-project.git'
                echo 'test1'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'test2'
                sh 'docker build -t vinoth1310/nodejs:latest .'

            }
        }

        stage('Login to DockerHub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'vinoth1310', usernameVariable: 'DOCKERHUB_USERNAME', passwordVariable: 'DOCKERHUB_PASSWORD')]) {
                        sh "docker login -u vinoth1310 -p Vinoth@1310"
                    }
                    echo 'test3'
                }
            }
        }

        stage('Push Image') {
            steps {
                sh 'docker push vinoth1310/nodejs:latest'
            }
        }
    }

    post {
        always {
            sh 'docker logout'
        }
    }
}
