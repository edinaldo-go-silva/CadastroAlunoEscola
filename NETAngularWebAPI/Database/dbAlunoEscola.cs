using System;
using System.Reflection;
using System.Text;

namespace DexianWebAPI
{
    public class dbAlunoEscola
    {
        public StringBuilder stringBuilderAlunos = new StringBuilder();

        public dbAlunoEscola()
        {
            stringBuilderAlunos.Clear();    
        }


        public List<Aluno> dbAlunoCriaLista()
        {
            List<Aluno> _lstAlunos = new List<Aluno>();
            Aluno alunoLocal       = new Aluno();
            int _qtdeRec           = 1;
            //=======================================================================================================
            alunoLocal             = new Aluno();
            alunoLocal.iCodAluno   = _qtdeRec;
            alunoLocal.iCodEscola  = 1;
            alunoLocal.sNome       = "Yasmin Luana Marli Cavalcanti";
            alunoLocal.dNascimento = Convert.ToString(DateTime.Now.AddDays(Random.Shared.Next(-10000, -5000)));
            alunoLocal.sCPF        = "441.690.728-12";
            alunoLocal.sEndereco   = "Rua Pedro Gomes Cardim, 157";
            alunoLocal.sCelular    = "(11) 98532-4773";
            _lstAlunos.Add(alunoLocal);
            _qtdeRec++;
            //=======================================================================================================
            alunoLocal             = new Aluno();
            alunoLocal.iCodAluno   = _qtdeRec;
            alunoLocal.iCodEscola  = 1;
            alunoLocal.sNome       = "Filipe Oliver Caldeira";
            alunoLocal.dNascimento = Convert.ToString(DateTime.Now.AddDays(Random.Shared.Next(-10000, -5000)));
            alunoLocal.sCPF        = "678.410.098-01";
            alunoLocal.sEndereco   = "Rua São Simplício, 232";
            alunoLocal.sCelular    = "(11) 99498-1031";
            _lstAlunos.Add(alunoLocal);
            _qtdeRec++;
            //=======================================================================================================
            alunoLocal             = new Aluno();
            alunoLocal.iCodAluno   = _qtdeRec;
            alunoLocal.iCodEscola  = 1;
            alunoLocal.sNome       = "Calebe Heitor Roberto Barros";
            alunoLocal.dNascimento = Convert.ToString(DateTime.Now.AddDays(Random.Shared.Next(-10000, -5000)));
            alunoLocal.sCPF        = "608.678.618-60";
            alunoLocal.sEndereco   = "Praça Batuiruçu, 558";
            alunoLocal.sCelular    = "(11) 99501-8441";
            _lstAlunos.Add(alunoLocal);
            _qtdeRec++;
            //=======================================================================================================
            alunoLocal             = new Aluno();
            alunoLocal.iCodAluno   = _qtdeRec;
            alunoLocal.iCodEscola  = 1;
            alunoLocal.sNome       = "Nathan Daniel Rezende";
            alunoLocal.dNascimento = Convert.ToString(DateTime.Now.AddDays(Random.Shared.Next(-10000, -5000)));
            alunoLocal.sCPF        = "361.089.578-08";
            alunoLocal.sEndereco   = "Rua Sena Madureira, 895";
            alunoLocal.sCelular    = "(11) 99956-9994";
            _lstAlunos.Add(alunoLocal);
            _qtdeRec++;
            //=======================================================================================================
            alunoLocal             = new Aluno();
            alunoLocal.iCodAluno   = _qtdeRec;
            alunoLocal.iCodEscola  = 1;
            alunoLocal.sNome       = "Melissa Raimunda Oliveira";
            alunoLocal.dNascimento = Convert.ToString(DateTime.Now.AddDays(Random.Shared.Next(-10000, -5000)));
            alunoLocal.sCPF        = "075.832.328-05";
            alunoLocal.sEndereco   = "Rua Gaupo Jardim, 208";
            alunoLocal.sCelular    = "(11) 98856-8198";
            _lstAlunos.Add(alunoLocal);
            _qtdeRec++;
            //=======================================================================================================
            //alunoLocal = new Aluno();
            //alunoLocal.iCodAluno = _qtdeRec;
            //alunoLocal.iCodEscola = 1;
            //alunoLocal.sNome = "Bruno Ruan Cavalcanti";
            //alunoLocal.dNascimento = Convert.ToString(DateTime.Now.AddDays(Random.Shared.Next(-10000, -5000)));
            //alunoLocal.sCPF = "688.284.928-56";
            //alunoLocal.sEndereco = "Rua Caronte Almeida, 231";
            //alunoLocal.sCelular = "(11) 98947-6085";
            //_lstAlunos.Add(alunoLocal);
            //_qtdeRec++;
            //=======================================================================================================
            //alunoLocal = new Aluno();
            //alunoLocal.iCodAluno = _qtdeRec;
            //alunoLocal.iCodEscola = 1;
            //alunoLocal.sNome = "Lavínia Esther Vera Lima";
            //alunoLocal.dNascimento = Convert.ToString(DateTime.Now.AddDays(Random.Shared.Next(-10000, -5000)));
            //alunoLocal.sCPF = "874.534.338-19";
            //alunoLocal.sEndereco = "Alameda Cristóvão da Costa, 664";
            //alunoLocal.sCelular = "(11) 98955-5987";
            //_lstAlunos.Add(alunoLocal);
            //_qtdeRec++;
            //=======================================================================================================
            //alunoLocal             = new Aluno();
            //alunoLocal.iCodAluno   = _qtdeRec;
            //alunoLocal.iCodEscola  = 1;
            //alunoLocal.sNome       = "Tatiane Lúcia Heloisa da Luz";
            //alunoLocal.dNascimento = Convert.ToString(DateTime.Now.AddDays(Random.Shared.Next(-10000, -5000)));
            //alunoLocal.sCPF        = "066.601.078-19";
            //alunoLocal.sEndereco   = "Rua Carolina do Sul, 35";
            //alunoLocal.sCelular    = "(11) 99681-5302";
            //_lstAlunos.Add(alunoLocal);
            //_qtdeRec++;
            //=======================================================================================================
            //alunoLocal             = new Aluno();
            //alunoLocal.iCodAluno   = 1;
            //alunoLocal.iCodEscola  = 1;
            //alunoLocal.sNome       = "Leandro Rafael Diego Figueiredo";
            //alunoLocal.dNascimento = Convert.ToString(DateTime.Now.AddDays(Random.Shared.Next(-10000, -5000)));
            //alunoLocal.sCPF        = "960.053.518-34";
            //alunoLocal.sEndereco   = "Rua Inácio Pedroso, 587";
            //alunoLocal.sCelular    = "(11) 99210-1145";
            //_lstAlunos.Add(alunoLocal);
            //_qtdeRec++;
            //=======================================================================================================
            //alunoLocal             = new Aluno();
            //alunoLocal.iCodAluno   = _qtdeRec;
            //alunoLocal.iCodEscola  = 1;
            //alunoLocal.sNome       = "Elza Stefany Isadora Castro";
            //alunoLocal.dNascimento = Convert.ToString(DateTime.Now.AddDays(Random.Shared.Next(-10000, -5000)));
            //alunoLocal.sCPF        = "100.943.488-80";
            //alunoLocal.sEndereco   = "Rua Genaro, 4567";
            //alunoLocal.sCelular    = "(11) 98883-6609";
            //_lstAlunos.Add(alunoLocal);
            //_qtdeRec++;
            //=======================================================================================================
            //alunoLocal             = new Aluno();
            //alunoLocal.iCodAluno   = _qtdeRec;
            //alunoLocal.iCodEscola  = 1;
            //alunoLocal.sNome       = "Raimunda Ayla Isabelle das Neves";
            //alunoLocal.dNascimento = Convert.ToString(DateTime.Now.AddDays(Random.Shared.Next(-10000, -5000)));
            //alunoLocal.sCPF        = "955.504.298-53";
            //alunoLocal.sEndereco   = "Rua Abadia Lins, 765";
            //alunoLocal.sCelular    = "(11) 98155-2401";
            //_lstAlunos.Add(alunoLocal);
            //=======================================================================================================
            //_qtdeRec++;
            //alunoLocal             = new Aluno();
            //alunoLocal.iCodAluno   = _qtdeRec;
            //alunoLocal.iCodEscola  = 1;
            //alunoLocal.sNome       = "";
            //alunoLocal.dNascimento = Convert.ToString(DateTime.Now.AddDays(Random.Shared.Next(-10000, -5000)));
            //alunoLocal.sCPF        = "";
            //alunoLocal.sEndereco   = "";
            //alunoLocal.sCelular    = "";
            //_lstAlunos.Add(alunoLocal);


            //=======================================================================================================
            return _lstAlunos;

        }




        public List<Escola> dbEscolaCriaLista()
        {
            List<Escola> _lstEscolas = new List<Escola>();
            Escola escolaLocal       = new Escola();
            int _qtdeRec             = 1;
            //=======================================================================================================
            escolaLocal             = new Escola();
            escolaLocal.iCodEscola  = _qtdeRec;
            escolaLocal.sDescricao  = "Colegio São Luis ";
            _lstEscolas.Add(escolaLocal);
            _qtdeRec++;
            //=======================================================================================================
            escolaLocal             = new Escola();
            escolaLocal.iCodEscola  = _qtdeRec;
            escolaLocal.sDescricao  = "Escola Balão Vermelho";
            _lstEscolas.Add(escolaLocal);
            _qtdeRec++;
            //=======================================================================================================
            escolaLocal             = new Escola();
            escolaLocal.iCodEscola  = _qtdeRec;
            escolaLocal.sDescricao  = "Colégio Técnico Roldan Unesp";
            _lstEscolas.Add(escolaLocal);
            //=======================================================================================================
            return _lstEscolas;

        }
    }
}