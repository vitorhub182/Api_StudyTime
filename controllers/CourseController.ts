const courseService = require('../services/CourseService');

async function getCourseList(req, res) {
  const resposta = await courseService.getCourseList(req);
  if (resposta.tipo == "Sucess"){
    res.status(200).json(resposta);
  }else{
    console.error('Erro ao obter lista de cursos:', resposta);
    res.status(500).json({ error: 'Erro ao obter lista de cursos' });
  }
}

async function getCourse(req, res) {
  const resposta =  await courseService.getCourse(req);
  if (resposta.tipo == "Sucess"){
    res.status(200).json(resposta);
  }else if (resposta.description == "NOT FOUND"){
    res.status(404).json({ status: 'Curso não encontrado'})
  
  }else{
    console.error('Erro ao obter curso:', resposta.description);
    res.status(500).json({ error: 'Erro ao obter curso' });
  }
}

async function postRegisterCourse(req, res) {
  if(req.body.description != null && req.body.name != null){
  const resposta = await courseService.postRegisterCourse(req);
  
  if (resposta.tipo == "Sucess"){
    res.status(201).json(resposta);

  }else if (resposta.description == "NOT FOUND"){
    res.status(404).json({ status: 'Curso não encontrado'})
  
  }else{
    console.error('Erro ao obter curso:', resposta.description);
    res.status(500).json({ error: 'Erro ao obter curso' });
  }
}else{
  res.status(400).json({Error: "Parâmetros invalidos"});
}
}

async function deleteCourse(req, res) {
  const resposta = await courseService.deleteCourse(req);
  if (resposta.tipo == "Sucess"){
    res.status(200).json(resposta);

  }else if (resposta.description == "NOT FOUND"){
    res.status(404).json({ status: 'Curso não encontrado'})
  
  }else{
    console.error('Erro ao obter curso:', resposta.description);
    res.status(500).json({ error: 'Erro ao obter curso' });
  }
}

async function putCourse(req, res) {
  if(req.body.description != null && req.body.name != null){
  const resposta = await courseService.putCourse(req);
  if (resposta.tipo == "Sucess"){
    res.status(200).json(resposta);

  }else if (resposta.description == "NOT FOUND"){
    res.status(404).json({ status: 'Curso não encontrado'})
  
  }else{
    console.error('Erro ao obter curso:', resposta.description);
    res.status(500).json({ error: 'Erro ao obter curso' });
  }
  
}else{
  res.status(400).json({Error: "Parâmetros invalidos"});
}
}

async function patchCourse(req, res) {
  if(req.body.description != null && req.body.name != null){
  const resposta = await courseService.putCourse(req);
  if (resposta.tipo == "Sucess"){
    res.status(200).json(resposta);

  }else if (resposta.description == "NOT FOUND"){
    res.status(404).json({ status: 'Curso não encontrado'})
  
  }else{
    console.error('Erro ao obter curso:', resposta.description);
    res.status(500).json({ error: 'Erro ao obter curso' });
  }
}else{
  res.status(400).json({Error: "Parâmetros invalidos"});
}
}

async function postRegister(req, res) {
  if((req.body.id_aluno != null) && (req.body.id_curso != null)){
  const resposta = await courseService.postRegister(req);
  
  if (resposta.tipo == "Sucess"){
    res.status(201).json(resposta);

  }else if (resposta.description == "NOT FOUND"){
    res.status(404).json({ status: 'Curso ou usuário não encontrado'})
  
  }else{
    console.error('Erro ao obter curso:', resposta.description);
    res.status(500).json({ error: 'Erro ao obter Curso ou usuário' });
  }
}else{
  res.status(400).json({Error: "Parâmetros invalidos"});
}
}

async function getCourseRegister(req, res) {
  const resposta =  await courseService.getCourseRegister(req);
  if (resposta.tipo == "Sucess"){
    res.status(200).json(resposta);
  }else if (resposta.description == "NOT FOUND"){
    res.status(404).json({ status: 'Curso não encontrado'})
  
  }else{
    console.error('Erro ao obter curso:', resposta.description);
    res.status(500).json({ error: 'Erro ao obter curso' });
  }
}


  export default {
    getCourseList,
    getCourse,
    postRegisterCourse,
    deleteCourse,
    putCourse,
    patchCourse,
    postRegister,
    getCourseRegister
  };