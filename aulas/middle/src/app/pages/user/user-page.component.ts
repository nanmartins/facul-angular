import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/users.service";
import { Observable } from "rxjs";
import { User } from "src/app/model/user";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
})

export class UserPageComponent implements OnInit {

  users!: Observable<User[]>

  constructor(private service: UserService) {}

  ngOnInit() {
    this.users = this.service.getUsers()
  }

  editar(user: User) {
    const editado = user
    editado.name = 'New name'
    this.service.editUser(user.id, editado)
  }

  novoUser() {
    const user: User = {
      id: 54555,
      name: 'New user',
      email: 'new@user.com',
      gender: 'male',
      status: 'active'
    }

    this.service.postUser(user)
  }

  deletar(user: User) {
    this.service.deleteUser(user.id)
  }
}
