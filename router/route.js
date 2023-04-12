import { Router } from "express";

import * as controller from '../controller/controller.js'

const router = Router();


// question route 
// router.get('/questions' , controller.getQuestions);

// router.post('/questions' , controller.insertQuestions)

// short cut
router.route('/questions')
.get(controller.getQuestions)
.post(controller.insertQuestions)
.delete(controller.deletefunction)



router.route('/result')
.get(controller.getResult)
.post(controller.storeResult)
.delete(controller.dropResult)


export default router;
