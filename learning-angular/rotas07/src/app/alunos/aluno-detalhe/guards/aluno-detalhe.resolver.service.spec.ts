import { TestBed } from '@angular/core/testing';

import { AlunoDetalheResolverService } from './aluno-detalhe.resolver';

describe('AlunoDetalheResolverService', () => {
  let service: AlunoDetalheResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlunoDetalheResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
