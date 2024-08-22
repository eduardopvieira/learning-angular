import { CanDeactivateFn } from '@angular/router';
import { AlunoDetalheComponent } from '../alunos/aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';

// Define a função de guarda CanDeactivate
export const AlunosDeactivateGuard: CanDeactivateFn<AlunoFormComponent> = (
    component: AlunoFormComponent
) => {
    console.log('Chegou no alunos deactivate guard');
    if (component && component?.username && component?.username?.dirty) {
        const confirmation = confirm('You have some unsaved details. You sure to go back?')

        if (confirmation) {
            return true;
        } else {
            return false;
        }
    }
    console.log('Saiu do if, componente não existe');
    return true; // ou false, dependendo da lógica desejada
};
