import React from 'react';
import { Pagination as HeroPagination, Button } from '@heroui/react';
import { Icon } from '@iconify/react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ 
  currentPage, 
  totalPages, 
  onPageChange 
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-12">
      <div className="text-foreground-500 text-sm">
        Page {currentPage} of {totalPages}
      </div>
      
      <div className="flex gap-2">
        <Button
          isIconOnly
          variant="flat"
          isDisabled={currentPage === 1}
          onPress={() => onPageChange(currentPage - 1)}
          aria-label="Previous page"
        >
          <Icon icon="lucide:chevron-left" width={18} height={18} />
        </Button>
        
        <HeroPagination
          total={totalPages}
          page={currentPage}
          onChange={onPageChange}
          color="primary"
        />
        
        <Button
          isIconOnly
          variant="flat"
          isDisabled={currentPage === totalPages}
          onPress={() => onPageChange(currentPage + 1)}
          aria-label="Next page"
        >
          <Icon icon="lucide:chevron-right" width={18} height={18} />
        </Button>
      </div>
    </div>
  );
};