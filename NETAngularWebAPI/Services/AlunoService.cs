using NETAngularWebAPI;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Options;
using System.IO;
using System.Reflection.Metadata;
using System.Text.Json;

namespace NETAngularWebAPI.Services
{

    public class AlunoService : IAlunoService
    {
        public static IConfiguration? _memConfigAlunos;
        public string sCaminhoArquivoAlunos = "dbAlunos.json";

        public AlunoService(IConfiguration? Configuration)
        {
            _memConfigAlunos = Configuration;
        }


        public void _CarregaAlunosMemoria()
        {
            if (!File.Exists(sCaminhoArquivoAlunos))
            {
                string jsonString = JsonSerializer.Serialize(new dbAlunoEscola().dbAlunoCriaLista());
                _SalvaDadosJson(jsonString);
            }
        }

        public int _GetNextId()
        {
            var _dadosJson = JsonSerializer.Deserialize<List<Aluno>>(_CarregarDadosJson());
            int _return = 1;
            foreach (var _item in _dadosJson)
            {
                if (_item.iCodAluno > _return)
                {
                    _return = (int)_item.iCodAluno;
                }
            }
            return _return + 1;
        }


        public List<Aluno> _GetAll()
        {
            var _dadosJson = JsonSerializer.Deserialize<List<Aluno>>(_CarregarDadosJson());
            return _dadosJson;
        }

        public Aluno _GetById(int id)
        {
            var _dadosJson = JsonSerializer.Deserialize<List<Aluno>>(_CarregarDadosJson());
            Aluno _return = new Aluno();
            foreach (var _item in _dadosJson)
            {
                if (_item.iCodAluno == id)
                {
                    _return = _item;
                }
            }
            return _return;
        }


        public void _AddAluno(Aluno item)
        {
            var _dadosJson = JsonSerializer.Deserialize<List<Aluno>>(_CarregarDadosJson());
            item.iCodAluno  = _GetNextId();
            item.iCodEscola = 1;
            _dadosJson.Add(item);
            string jsonString = JsonSerializer.Serialize(_dadosJson);
            _SalvaDadosJson(jsonString);
            return;
        }

        public void _DeleteAluno(int id)
        {
            var _dadosJson = JsonSerializer.Deserialize<List<Aluno>>(_CarregarDadosJson());
            Aluno _remove = _dadosJson.First(x => x.iCodAluno == id);
            if (_remove != null)
            {
                _dadosJson.Remove(_remove);
            }
            string jsonString = JsonSerializer.Serialize(_dadosJson);
            _SalvaDadosJson(jsonString);
            return;
        }

        public void _UpdateAluno(Aluno item)
        {
            var _dadosJson = JsonSerializer.Deserialize<List<Aluno>>(_CarregarDadosJson());
            foreach (var _item in _dadosJson)
            {
                if (_item.iCodAluno == item.iCodAluno)
                {
                    _item.iCodEscola  = item.iCodEscola;
                    _item.sNome       = item.sNome;
                    _item.dNascimento = item.dNascimento;
                    _item.sCPF        = item.sCPF;
                    _item.sEndereco   = item.sEndereco;
                    _item.sCelular    = item.sCelular;
                }
            }
            string jsonString = JsonSerializer.Serialize(_dadosJson);
            _SalvaDadosJson(jsonString);
            return;
        }




        public void _SalvaDadosJson(string sTexto)
        {
            using (StreamWriter sw = File.CreateText(sCaminhoArquivoAlunos))
            {
                sw.WriteLine(sTexto);
                sw.Close();
                sw.Dispose();
            }
        }

        public string _CarregarDadosJson()
        {
            string _return = "";
            if (File.Exists(sCaminhoArquivoAlunos))
            {
                using (var sr = new StreamReader(sCaminhoArquivoAlunos))
                {
                    _return = _return + (sr.ReadToEnd());
                }
            }
            return _return;
        }
    }
}
