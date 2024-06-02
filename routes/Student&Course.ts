import {express} from '../utils/pacotes';
const router = express.Router();
import CourseController  from '../controllers/CourseController';
import StudentController from '../controllers/StudentController';

router.get('/course/', CourseController.getCourseList);
router.get('/course/COURSE=:course_id', CourseController.getCourse);
router.post('/course/', CourseController.postRegisterCourse);
router.delete('/course/COURSE=:course_id', CourseController.deleteCourse);
router.put('/course/COURSE=:course_id', CourseController.putCourse);
router.patch('/course/COURSE=:course_id', CourseController.patchCourse);

router.get('/student/', StudentController.getStudentList);
router.get('/student/STUDENT=:student_id', StudentController.getStudent);
router.post('/student/', StudentController.postRegisterStudent);
router.delete('/student/STUDENT=:student_id', StudentController.deleteStudent);
router.put('/student/STUDENT=:student_id', StudentController.putStudent);
router.patch('/student/STUDENT=:student_id', StudentController.patchStudent);

router.post('/register/', CourseController.postRegister);
router.get('/register/student/STUDENT=:student_id', StudentController.getStudentRegister);
router.get('/register/course/COURSE=:course_id', CourseController.getCourseRegister);
module.exports = router;