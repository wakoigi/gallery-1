pipeline { 
  agent any
  tools{
	nodejs 'Node-18'
  }
  
  stages { 
    stage('clone repository') {
      steps { 
        git 'https://github.com/akibirio/gallery-1.git'
      }
    }
     stage('Build the project') {
      steps { 
        sh 'echo "here we will Build"'
      }
    }
	stage('Install Dependencies') {
      steps { 
        sh 'npm install'
      }
    }
    stage('Tests') {
      steps { 
        sh 'npm test'
      }
    }
	stage('Deploy Application') {
      steps {
              withCredentials([usernameColonPassword(credentialsId: '7710a689-fe42-4731-809a-e74a485ee687', variable: 'HEROKU_CREDENTIALS' )]){
                    sh 'git push https://${HEROKU_CREDENTIALS}@git.heroku.com/sprintech.git master'
              }
    }
  }
}
}