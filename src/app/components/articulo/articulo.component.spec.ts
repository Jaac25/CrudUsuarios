//Importa las clases para prueba y depuración de componentes
import { ComponentFixture, TestBed } from '@angular/core/testing';

//Importa la clase ArticuloComponent del archivo articulo.component.ts
import { ArticuloComponent } from './articulo.component';

// con describe se define la colección de tests a realizar
describe('ArticuloComponent', () => {
  let component: ArticuloComponent;
  //crea el elemento de prueba para probar el componente creado
  let fixture: ComponentFixture<ArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
