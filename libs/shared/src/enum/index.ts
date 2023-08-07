export enum QueueTasks {
  UPLOAD_PHOTO = 'task.upload.photo',
  SEND_EMAIL = 'task.send.email',
  SEND_SMS = 'task.send.sms',
  SEND_NOTIFICATION = 'task.send.notification',
  PING = 'task.send.ping',
}

export enum WorkerQueue {
  PROCESS_WORK = 'gns.jobs.process.work',
}
