import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-filters',
  imports: [FormsModule],
  templateUrl: './card-filters.html',
  styleUrl: './card-filters.css',
})
export class CardFilters {
  protected year = '2026';
  protected school = 'Todas';
  protected stage = 'Todas';
  protected teacher = 'Todos';
  protected status = 'Todas';
  protected schoolYears: String[] = [];

  constructor() {
    this.schoolYears = this.stringDates();
  }

  protected clearFilters(): void {
    this.year = '2026';
    this.school = 'Todas';
    this.stage = 'Todas';
    this.teacher = 'Todos';
    this.status = 'Todas';
  }

  protected applyFilters(): void {
    console.log({
      year: this.year,
      school: this.school,
      stage: this.stage,
      teacher: this.teacher,
      status: this.status,
    });
  }

  protected teachers(): string[] {
    return ['Todos','Ballak', 'Canoa']
  }

  protected teachingStage(): string[] {
    return [
      'Todas',
      'Curso técnico',
      'Curso tecnólogo',
      'Bacharelado',
      'Licenciatura',
      'Especialização',
      'MBA',
      'Mestrado',
      'Doutorado',
      'Pós-doutorado',
    ];
  }
  protected schools(): string[] {
    return [
      'Todas',
      'Faculade de Americana (FAM)',
      'Universidade de São Paulo',
      'Universidade Estadual de Campinas',
      'Universidade Federal do Rio de Janeiro',
      'Universidade Federal de Minas Gerais',
      'Universidade Federal do Rio Grande do Sul',
      'Universidade Federal de Santa Catarina',
      'Universidade de Brasília',
      'Pontifícia Universidade Católica de São Paulo',
      'Pontifícia Universidade Católica do Rio de Janeiro',
      'Pontifícia Universidade Católica do Paraná',
      'Pontifícia Universidade Católica de Minas Gerais',
      'Universidade Federal do Paraná',
      'Universidade Federal da Bahia',
      'Universidade Federal de Pernambuco',
      'Universidade Federal do Ceará',
      'Universidade Federal Fluminense',
      'Universidade Federal de Goiás',
      'Universidade Federal de São Carlos',
      'Universidade Federal de Viçosa',
      'Universidade Federal do Espírito Santo',
      'Universidade Federal do Pará',
      'Universidade Federal da Paraíba',
      'Universidade Federal do Rio Grande do Norte',
      'Universidade Federal de Mato Grosso do Sul',
      'Universidade Federal de Mato Grosso',
      'Universidade Federal de Uberlândia',
      'Universidade Federal de Juiz de Fora',
      'Universidade Federal de Ouro Preto',
      'Universidade Federal do ABC',
      'Universidade Estadual Paulista',
      'Universidade Estadual de Londrina',
      'Universidade Estadual de Maringá',
      'Universidade Estadual do Rio de Janeiro',
      'Universidade Estadual do Norte Fluminense',
      'Universidade do Estado de Santa Catarina',
      'Universidade do Vale do Rio dos Sinos',
      'Universidade Presbiteriana Mackenzie',
      'Insper',
      'Fundação Getulio Vargas',
      'Universidade Anhembi Morumbi',
      'Centro Universitário FEI',
      'Universidade Positivo',
      'Universidade Tiradentes',
      'Universidade Salvador',
      'Universidade de Fortaleza',
      'Universidade Católica de Brasília',
      'Universidade de Caxias do Sul',
      'Universidade do Oeste Paulista',
      'Universidade Cruzeiro do Sul',
      'Universidade Nove de Julho',
    ];
  }
  protected stringDates(): string[] {
    return Array.from({ length: 26 }, (_, index) => {
      return (new Date().getFullYear() - index).toString();
    });
  }
}
