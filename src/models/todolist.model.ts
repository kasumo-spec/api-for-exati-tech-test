import {Entity, model, property} from '@loopback/repository';

@model()
export class Todolist extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
  })
  limitDate?: string;

  @property({
    type: 'boolean',
    default: false,
  })
  isComplete?: boolean;

  constructor(data?: Partial<Todolist>) {
    super(data);
  }
}

export interface TodolistRelations {
  // describe navigational properties here
}

export type TodolistWithRelations = Todolist & TodolistRelations;
