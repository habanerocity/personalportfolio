import Pagination from 'react-bootstrap/Pagination';
import classes from './Pagination.module.scss';

const BlogPagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    const renderPageItems = () => {
        const items = [];
        
        for (let page = 1; page <= totalPages; page++) {
            items.push(
                <Pagination.Item
                    key={page}
                    active={page === currentPage}
                    onClick={() => handlePageChange(page)}
                    className={classes.pagination__item}
                >
                    {page}
                </Pagination.Item>
            );
        }
        
        return items;
    };

    if (totalPages <= 1) return null;

    return (
        <Pagination className={`${classes.pagination} justify-content-center mt-5`}>
            <Pagination.First 
                onClick={() => handlePageChange(1)} 
                disabled={currentPage === 1}
                
            />
            <Pagination.Prev 
                onClick={() => handlePageChange(currentPage - 1)} 
                disabled={currentPage === 1}
                
            />
            
            {renderPageItems()}
            
            <Pagination.Next 
                onClick={() => handlePageChange(currentPage + 1)} 
                disabled={currentPage === totalPages}
                
            />
            <Pagination.Last 
                onClick={() => handlePageChange(totalPages)} 
                disabled={currentPage === totalPages}
                
            />
        </Pagination>
    );
};

export default BlogPagination;