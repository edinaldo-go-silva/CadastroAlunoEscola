using DexianWebAPI;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Options;
using System.IO;
using System.Reflection.Metadata;
using System.Text.Json;

namespace DexianWebAPI.Services
{

    public class EscolaService : IEscolaService
    {
        public static IConfiguration? _memConfigEscolas;
        public string sCaminhoArquivoEscolas = "dbEscolas.json";

        public EscolaService(IConfiguration? Configuration)
        {
            _memConfigEscolas = Configuration;
        }


        public void _CarregaEscolasMemoria()
        {
            if (!File.Exists(sCaminhoArquivoEscolas))
            {
                string jsonString = JsonSerializer.Serialize(new dbAlunoEscola().dbEscolaCriaLista());
                _SalvaDadosJson(jsonString);
            }
        }

        public int _GetNextId()
        {
            var _dadosJson = JsonSerializer.Deserialize<List<Escola>>(_CarregarDadosJson());
            int _return = 1;
            foreach (var _item in _dadosJson)
            {
                if (_item.iCodEscola > _return)
                {
                    _return = (int)_item.iCodEscola;
                }
            }
            return _return + 1;
        }


        public List<Escola> _GetAll()
        {
            var _dadosJson = JsonSerializer.Deserialize<List<Escola>>(_CarregarDadosJson());
            return _dadosJson;
        }

        public Escola _GetById(int id)
        {
            var _dadosJson = JsonSerializer.Deserialize<List<Escola>>(_CarregarDadosJson());
            Escola _return = new Escola();
            foreach (var _item in _dadosJson)
            {
                if (_item.iCodEscola == id)
                {
                    _return = _item;
                }
            }
            return _return;
        }


        public void _AddEscola(Escola item)
        {
            var _dadosJson = JsonSerializer.Deserialize<List<Escola>>(_CarregarDadosJson());
            item.iCodEscola  = _GetNextId();
            _dadosJson.Add(item);
            string jsonString = JsonSerializer.Serialize(_dadosJson);
            _SalvaDadosJson(jsonString);
            return;
        }

        public void _DeleteEscola(int id)
        {
            var _dadosJson = JsonSerializer.Deserialize<List<Escola>>(_CarregarDadosJson());
            Escola _remove = _dadosJson.First(x => x.iCodEscola == id);
            if (_remove != null)
            {
                _dadosJson.Remove(_remove);
            }
            string jsonString = JsonSerializer.Serialize(_dadosJson);
            _SalvaDadosJson(jsonString);
            return;
        }

        public void _UpdateEscola(Escola item)
        {
            var _dadosJson = JsonSerializer.Deserialize<List<Escola>>(_CarregarDadosJson());
            foreach (var _item in _dadosJson)
            {
                if (_item.iCodEscola == item.iCodEscola)
                {
                    _item.sDescricao  = item.sDescricao;
                }
            }
            string jsonString = JsonSerializer.Serialize(_dadosJson);
            _SalvaDadosJson(jsonString);
            return;
        }




        public void _SalvaDadosJson(string sTexto)
        {
            using (StreamWriter sw = File.CreateText(sCaminhoArquivoEscolas))
            {
                sw.WriteLine(sTexto);
                sw.Close();
                sw.Dispose();
            }
        }

        public string _CarregarDadosJson()
        {
            string _return = "";
            if (File.Exists(sCaminhoArquivoEscolas))
            {
                using (var sr = new StreamReader(sCaminhoArquivoEscolas))
                {
                    _return = _return + (sr.ReadToEnd());
                }
            }
            return _return;
        }
    }
}
