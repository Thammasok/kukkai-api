pipeline {
    agent { docker { image 'node:6.12' } }
    stages {
        stage('build') {
            steps {
              sh 'npm install'
            }
        }
        stage('start') {
          steps {
            sh 'npm start'
          }
        }
    }
}