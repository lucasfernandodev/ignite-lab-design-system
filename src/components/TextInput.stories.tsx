import { TextInput, PropsTextIputRoot } from "./TextInput";
import { Meta, StoryObj } from "@storybook/react";
import { Envelope} from 'phosphor-react';

export default {
  title: "Components/Input",
  component: TextInput.Root,
  args: {
    children: [

      <TextInput.Icon>
      <Envelope />
        </TextInput.Icon>,
        <TextInput.Input placeholder="Digite seu email"></TextInput.Input>
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
  }
} as Meta<PropsTextIputRoot>;


export const Default: StoryObj<PropsTextIputRoot> = {};

export const InputSemIcone: StoryObj<PropsTextIputRoot> = {
  args: {
    children: ( <TextInput.Input placeholder="Digite seu email"></TextInput.Input>)
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
  }
};
