// ApiSpringboot.js
import axios from 'axios';

// Hàm gọi API để lấy tất cả tài khoản
export const getAllAccounts = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/account/getall');
        return response.data;
    } catch (error) {
        console.error('Có lỗi khi lấy dữ liệu:', error);
        throw error;
    }
};
