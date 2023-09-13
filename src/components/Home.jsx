import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table} from 'antd';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://northwind.vercel.app/api/products")
      .then((res) => setData(res.data))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setData([]);
      });
  }, []);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "UnitPrice",
      dataIndex: "unitPrice", // Use "unitPrice" instead of "unitprice" to match your data
      key: "unitPrice",
    },
  ];

  const mydata = data.map((item) => ({
    id: item.id,
    name: item.name,
    unitPrice: item.unitPrice, // Use "unitPrice" instead of "unitprice" to match your data
  }));

  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">About</Link>
        </li>
      </ul>
      <Table columns={columns} dataSource={mydata} />
    </>
  );
};

export default Home;

