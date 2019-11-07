import * as Yup from 'yup';
import Enrollment from '../models/Enrollment';

class EnrollmenteController {
  async index(req, res) {
    const enrollments = await Enrollment.findAll();

    if (!enrollments) {
      return res.status(400).json({ error: 'Não existe nenhuma inscrição.' });
    }

    return res.json(enrollments);
  }
}

export default new EnrollmenteController();
