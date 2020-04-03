import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { ChatService } from './chat.service';
import { FormsModule } from '@angular/forms';
import { chainedInstruction } from '@angular/compiler/src/render3/view/util';



@NgModule({
  declarations: [ChatDialogComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [ChatService],
  exports: [ChatDialogComponent]
})
export class ChatModule { }
