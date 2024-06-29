import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

type TProps = {
  setShowList: any;
  viewData: any;
};

export const ViewDetails: React.FC<TProps> = ({ setShowList, viewData }) => {
  const [viewDetails, setViewDetails] = useState<any>({});

  const fetchUserDetails = async (url: any) => {
    const reponse = await fetch(url);
    const data = await reponse.json();
    setViewDetails(data);
  };

  useEffect(() => {
    if (viewData?.url) {
      fetchUserDetails(viewData?.url);
    }
  }, [viewData]);

  return (
    <div>
      <div>
        <Button colorScheme="blue" onClick={() => setShowList(true)}>
          Back to list
        </Button>
      </div>
      <div>
        <Card maxW="md">
          <CardHeader>
            <Heading size="md">Actor details</Heading>
          </CardHeader>
          <CardBody>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar />
              <Heading pl="2" fontSize="sm">
                {viewDetails?.name}
              </Heading>
            </div>
            <Box>
              <Text pt="2" fontSize="sm">
                {`Eye color : ${viewDetails?.eye_color}`}
              </Text>
            </Box>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
