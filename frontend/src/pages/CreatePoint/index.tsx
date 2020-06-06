import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api';
import logo from '../../assets/logo.svg';
import './styles.css';

interface Item {
  id: number,
  name: string,
  image_url: string
}

const CreatePoint: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    api.get('items').then(response => {
      setItems(response.data);
    })
  }, [])

  return (
    <div id="page-create-point">
      <div className="content">

        <header>
          <img src={logo} alt="main-logo" />
          <Link to="/">
            <FiArrowLeft />
            Voltar para Home
          </Link>
        </header>

        <form action="">
          <h1>Cadastro do <br />ponto de coleta</h1>
          <fieldset>
            <legend>
              <h2>Dados</h2>
            </legend>
            <div className="field">
              <label htmlFor="name">Nome da Entidade</label>
              <input
                type="text"
                name="name"
                id="name"
              />
            </div>

            <div className="field-group">

              <div className="field">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                />
              </div>

              <div className="field">
                <label htmlFor="whatsapp">Whatsapp</label>
                <input
                  type="text"
                  name="whatsapp"
                  id="whatsapp"
                />
              </div>

            </div>
          </fieldset>

          <fieldset>

            <legend>
              <h2>Endereço</h2>
              <span>Selecione o endereço no mapa </span>
            </legend>

            <Map
              center={[-3.813729, -42.454012]}
              zoom={15}
            >
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={[-3.813729, -42.454012]}
              />
            </Map>

            <div className="field-group">

              <div className="field">
                <label htmlFor="uf">Estado (UF)</label>
                <select name="uf" id="uf">
                  <option value="0">Selecione um Estado</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="city">Cidade</label>
                <select name="city" id="city">
                  <option value="0">Selecione uma Cidade</option>
                </select>
              </div>

            </div>
          </fieldset>

          <fieldset>
            <legend>
              <h2>Itens de Coleta</h2>
              <span>Selecione um ou mais itens abaixo</span>
            </legend>
            <ul className="items-grid">

              {items.map(item => (
                <li key={item.id} className="selected">
                  <img src={item.image_url} alt={item.name} />
                  <span>{item.name}</span>
                </li>
              ))}

            </ul>
          </fieldset>
          <button type="submit">Cadastrar ponto de coleta</button>
        </form>
      </div>
    </div>
  );
}

export default CreatePoint;
