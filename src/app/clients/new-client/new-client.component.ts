import { Component, Inject, OnDestroy } from '@angular/core';
import { SERVICES_TOKEN } from '../../services/service.token';
import { ClientsService } from '../../services/api-client/clients/clients.service';
import { ICLientService } from '../../services/api-client/clients/iclients.service';
import { ClientFormComponent } from "../components/client-form/client-form.component";
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ClientModelForm } from '../client.models';

@Component({
  selector: 'app-new-client',
  imports: [ClientFormComponent],
  templateUrl: './new-client.component.html',
  styleUrl: './new-client.component.scss',
  providers: [
    { provide: SERVICES_TOKEN.HTTP.CLIENT, useClass: ClientsService }]
})
export class NewClientComponent implements OnDestroy {

  private httpSubscription?: Subscription

  constructor(@Inject(SERVICES_TOKEN.HTTP.CLIENT) private readonly httpService: ICLientService, private readonly router: Router){ }

  ngOnDestroy(): void {
    if (this.httpSubscription) {
      this.httpSubscription.unsubscribe()
    }
  }

  onSubmitClient(value: ClientModelForm) {
    const { id, ...request } = value
    this.httpSubscription = this.httpService.save(request).subscribe(_ => {
     
      this.router.navigate(['clients/list'])
    })
  }

}
