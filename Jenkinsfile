pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Mohanram145/Demo_ChatGPT_Project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t hello-devops .'
            }
        }

        stage('Run Docker Container') {
            steps {
                bat '''
                docker stop hello-devops || exit 0
                docker rm hello-devops || exit 0
                docker run -d -p 3000:3000 --name hello-devops hello-devops
                '''
            }
        }
    }
}
