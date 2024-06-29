"use client";
import React, { useEffect, useState } from "react";
import moment from "moment";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";

type TProps = {
  setShowList: any;
  setViewData: any;
};

const ListTable: React.FC<TProps> = ({ setShowList, setViewData }) => {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: any = await fetch("https://swapi.dev/api/people/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setListData(data?.results);
      } catch (error) {}
    };

    fetchData();
  }, []);

  const handleViewClick = (data: any) => {
    setViewData(data);
    setShowList(false);
  };

  return (
    <div>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>s.no</Th>
              <Th>name</Th>
              <Th>gender</Th>
              <Th>birth year</Th>
              <Th>height</Th>
              <Th>mass</Th>
              <Th>skin color</Th>
              <Th>hair color</Th>
              <Th>eye color</Th>
              <Th>created at</Th>
              <Th>edited at</Th>
              <Th>home world</Th>
              <Th>actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {listData?.map((data: any, index) => (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>{data?.name}</Td>
                <Td>{data?.gender}</Td>
                <Td>{data?.birth_year}</Td>
                <Td>{data?.height}</Td>
                <Td>{data?.mass}</Td>
                <Td>{data?.skin_color}</Td>
                <Td>{data?.hair_color}</Td>
                <Td>{data?.eye_color}</Td>
                <Td>
                  {data?.created
                    ? moment(data.created).format("DD-MM-YYYY hh:mm A")
                    : ""}
                </Td>
                <Td>
                  {data?.edited
                    ? moment(data.edited).format("DD-MM-YYYY hh:mm A")
                    : ""}
                </Td>
                <Td>{data?.homeworld}</Td>
                <Td>
                  <Button
                    colorScheme="gray"
                    onClick={() => handleViewClick(data)}
                  >
                    View
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ListTable;
