import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Box, Heading, Text, Button } from '@chakra-ui/react'
import { HStack } from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
const TodoItem = ({e}) => {
  return (
    //card
    <div>
    
       <Box>
        <Heading size='xs' textTransform='uppercase'>
          {e.title}
        </Heading>
        <HStack>
            <Checkbox isChecked={UpdateTodo}></Checkbox>
        <Text pt='2' fontSize='sm'>
          {e.status?"completed":"not completed"} 
          </Text>
        </HStack>
        <Button>View More</Button>
      </Box>
    
    </div>
  )
}

export default TodoItem
