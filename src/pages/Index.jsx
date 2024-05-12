import { useState } from 'react';
import { Container, VStack, Heading, Input, Button, List, ListItem, IconButton, useToast } from '@chakra-ui/react';
import { FaTrash, FaEdit } from 'react-icons/fa';

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const toast = useToast();

  const addTask = () => {
    if (input === '') {
      toast({
        title: 'No task entered',
        description: "Please enter a task before adding.",
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setTasks([...tasks, { id: Date.now(), text: input }]);
    setInput('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, newText) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, text: newText };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={4}>
        <Heading mb={6}>Todo App</Heading>
        <Input
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          size="lg"
        />
        <Button onClick={addTask} colorScheme="blue" px={8}>
          Add Task
        </Button>
        <List spacing={3} w="full">
          {tasks.map(task => (
            <ListItem key={task.id} d="flex" justifyContent="space-between" alignItems="center" p={2} boxShadow="md">
              <Input type="text" defaultValue={task.text} onBlur={(e) => editTask(task.id, e.target.value)} />
              <IconButton aria-label="Delete Task" icon={<FaTrash />} onClick={() => deleteTask(task.id)} />
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;