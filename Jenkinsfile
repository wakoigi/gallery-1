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
              
            sh 'git push https://ayubkibirio:93d813f6-d721-4271-b788-d4b4442298d1@git.heroku.com/sprintech.git master'
             
    }
  }
}
}