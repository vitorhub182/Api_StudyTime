const studentService = require('../services/StudentService');

async function getStudentList(req, res) {
  const resposta = await studentService.getStudentList(req);
  if (resposta.tipo == "Sucess"){
    res.status(200).json(resposta);
  }else{
    console.error('Erro ao obter lista de alunos:', resposta);
    res.status(500).json({ error: 'Erro ao obter lista de alunos' });
  }
}

async function getStudent(req, res) {
  const resposta =  await studentService.getStudent(req);
  if (resposta.tipo == "Sucess"){
    res.status(200).json(resposta);
  }else if (resposta.description == "NOT FOUND"){
    res.status(404).json({ status: 'Aluno não encontrado'})
  
  }else{
    console.error('Erro ao obter alunos:', resposta.description);
    res.status(500).json({ error: 'Erro ao obter alunos' });
  }
}

async function postRegisterStudent(req, res) {
  if(req.body.last_name != null && req.body.name != null){
  const resposta = await studentService.postRegisterStudent(req);
  
  if (resposta.tipo == "Sucess"){
    res.status(201).json(resposta);

  }else if (resposta.description == "NOT FOUND"){
    res.status(404).json({ status: 'Aluno não encontrado'})
  
  }else{
    console.error('Erro ao obter alunos:', resposta.description);
    res.status(500).json({ error: 'Erro ao obter alunos' });
  }
}else{
  res.status(400).json({Error: "Parâmetros invalidos"});
}
}

async function deleteStudent(req, res) {
  const resposta = await studentService.deleteStudent(req);
  if (resposta.tipo == "Sucess"){
    res.status(200).json(resposta);

  }else if (resposta.description == "NOT FOUND"){
    res.status(404).json({ status: 'Aluno não encontrado'})
  
  }else{
    console.error('Erro ao obter alunos:', resposta.description);
    res.status(500).json({ error: 'Erro ao obter alunos' });
  }
}

async function putStudent(req, res) {
  if(req.body.last_name != null && req.body.name != null){
  const resposta = await studentService.putStudent(req);
  if (resposta.tipo == "Sucess"){
    res.status(200).json(resposta);

  }else if (resposta.description == "NOT FOUND"){
    res.status(404).json({ status: 'Aluno não encontrado'})
  
  }else{
    console.error('Erro ao obter alunos:', resposta.description);
    res.status(500).json({ error: 'Erro ao obter alunos' });
  }
  
}else{
  res.status(400).json({Error: "Parâmetros invalidos"});
}
}

async function patchStudent(req, res) {
  if(req.body.last_name != null && req.body.name != null){
  const resposta = await studentService.putStudent(req);
  if (resposta.tipo == "Sucess"){
    res.status(200).json(resposta);

  }else if (resposta.description == "NOT FOUND"){
    res.status(404).json({ status: 'Aluno não encontrado'})
  
  }else{
    console.error('Erro ao obter alunos:', resposta.description);
    res.status(500).json({ error: 'Erro ao obter alunos' });
  }
}else{
  res.status(400).json({Error: "Parâmetros invalidos"});
}
}

async function getStudentRegister(req, res) {
  const resposta =  await studentService.getStudentRegister(req);
  if (resposta.tipo == "Sucess"){
    res.status(200).json(resposta);
  }else if (resposta.description == "NOT FOUND"){
    res.status(404).json({ status: 'Aluno não encontrado'})
  
  }else{
    console.error('Erro ao obter aluno:', resposta.description);
    res.status(500).json({ error: 'Erro ao obter aluno' });
  }
}

  export default {
    getStudentList,
    getStudent,
    postRegisterStudent,
    deleteStudent,
    putStudent,
    patchStudent,
    getStudentRegister
  };