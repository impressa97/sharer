import React from "react";
import { Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <div class="container mt-3">
        <div class="jumbotron p-3 p-md-5 text-white rounded bg-dark">
          <div class="col-md-6 px-0">
            <h1 class="display-4 font-italic">Добро пожаловать в WinterTake</h1>
            <p class="lead my-3">
              Это система учета прокатного оборудования, если вы пользователь -
              то свяжитесь свяжитесь с оператором
            </p>
            <p class="lead mb-0"></p>
          </div>
        </div>

        <div class="row mb-2">
          <div class="col-md-6">
            <div class="card flex-md-row mb-4 box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <strong class="d-inline-block mb-2 text-primary">
                  Электричество!
                </strong>
                <h3 class="mb-0">
                  <NavLink class="text-dark" to="/dashboard">
                    Теперь у нас возможно арендовать элеткросамокаты
                  </NavLink>
                </h3>
                <div class="mb-1 text-muted">Nov 12</div>
                <p class="card-text mb-auto">
                  Электротранспорт считается транспортом будущего, поскольку
                  решает проблемы экологии и движения. Это удобное
                  приспособление как для поездок на работу, так и для ведения
                  активного образа жизни, развлечений и интересной прогулки.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card flex-md-row mb-4 box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <strong class="d-inline-block mb-2 text-success">
                  Велосипеды
                </strong>
                <h3 class="mb-0">
                  <NavLink class="text-dark" to="/dashboard/">
                    Велосипеды в доступе
                  </NavLink>
                </h3>
                <div class="mb-1 text-muted">Nov 11</div>
                <p class="card-text mb-auto">
                  Велоспорт покорил сердца многих людей и уверенно завоевывает
                  внимание горожан и современной молодежи. Широкий модельный ряд
                  и большой выбор аксессуаров, удобная накопительная система
                  скидок и бонусов дают возможность нашим пользователям
                  арендовать велосипед по выгодной цене.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
