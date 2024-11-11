pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url: 'git@github.com:etherfoun/jenkins-demo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'Building...'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test' 
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying...'
            }
        }
    }

    post {
        success {
            mail to: 'dizentd@gmail.com',
                subject: "Build Successful: ${currentBuild.fullDisplayName}",
                body: "The build was successful!"
        }
        failure {
            mail to: 'dizentd@gmail.com',
                subject: "Build Failed: ${currentBuild.fullDisplayName}",
                body: "The build has failed. Please check the Jenkins logs for details."
        }
    }
}
