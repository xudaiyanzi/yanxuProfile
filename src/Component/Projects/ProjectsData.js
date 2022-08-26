import OOP_Pacman from '../pic/pic_projects/OOP_Pacman.png'
import CICD_AWS from '../pic/pic_projects/CICD_AWS.png'
import recognize from '../pic/pic_projects/recognize.jpeg'
import nba_injury from '../pic/pic_projects/nba_injury.png'
import full_stack_immigration from '../pic/pic_projects/full_stack_immigration.png'
import backend_chat from '../pic/pic_projects/backend_chat.png'

const Portfolio_data = [
    {
        id: 1,
        category: 'Full Stack',
        title: 'Pacman',
        image:OOP_Pacman,
        url: 'https://pacman-final-team-good-team.herokuapp.com/',
    },

    {
        id: 2,
        category: 'Full Stack',
        title: 'Immigration Statistics',
        image:full_stack_immigration,
        url:'https://stark-cove-90983.herokuapp.com/'
    },

    {
        id: 3,
        category: 'Backend',
        title: 'Chat App',
        image:backend_chat,
        url:'https://chatapp-final-team-good-team.herokuapp.com/index.html'
    },

    {
        id: 4,
        category: 'AWS CI/CD',
        title: 'Kubernetes in AWS',
        image:CICD_AWS,
        url:'https://github.com/xudaiyanzi/deploy_app_to_kubernetes',
    },

    {
        id: 5,
        category: 'Deep Learning',
        title: 'Recognize Voice',
        image:recognize,
        image_site:'https://medium.com/@jameschen_78678/predict-gender-with-voice-and-speech-data-347f437fc4da',
        url:'https://github.com/xudaiyanzi/recognition_gender_by_voice'
    },
    {
        id: 6,
        category: 'Machine Learning',
        title: 'NBA Players Prediction',
        image:nba_injury,
        url:'https://github.com/xudaiyanzi/NBA_players_salary/tree/master/injuries'
    },
]
export default Portfolio_data
