import { useEffect, useState } from 'react';
import { Stack, Tooltip } from '@mantine/core';
import { Icon } from '@iconify/react'; // Importojmë komponentin Iconify
import { Link, useLocation } from 'react-router-dom';

const data = [
  { icon: 'tabler:layout-dashboard', name: 'Dashboard', active: true, path: '' },
  { icon: 'tabler:building-estate', name: 'My Properties', active: false, path: 'properties' },
  { icon: 'tabler:users', name: 'Tenants', active: false },
];

export default function NavbarIconify() {
    const [opened, setOpened] = useState(true);
    let location = useLocation();
    let pathname = location.pathname.slice(1);  

    const links = data.map((link, key) => (
    <Tooltip 
        label={link.name} 
        position="right" 
        disabled={opened}
        key={key}
        transitionProps={{ duration: 0 }}
    >
        <Link to={link.path}
        className={`flex items-center w-full p-3 rounded-lg transition-all duration-200 group ${
            link.path == pathname 
            ? 'bg-main text-accent' 
            : 'text-mid hover:bg-main hover:text-gray-900'
        }`}
        >
        <Icon 
            icon={link.icon} 
            width="24" 
            height="24" 
            className={link.path == pathname ? 'text-accent' : 'text-gray-500 group-hover:text-gray-900'} 
        />
        
        <div className={`overflow-hidden transition-all duration-300 ${opened ? 'w-auto ml-3 opacity-100' : 'w-0 opacity-0'}`}>
            <span className="font-medium text-sm whitespace-nowrap">{link.name}</span>
        </div>
        </Link>
    </Tooltip>
    ));

    return (
    <nav 
        className={`h-screen bg-white border-r border-gray-200 p-4 flex flex-col transition-all duration-300 ease-in-out ${
        opened ? 'w-64' : 'w-20'
        }`}
    >
        <div className="flex items-center justify-between mb-8 px-1 h-10">
        {opened && (
            <span className="text-xl font-bold text-gray-800 animate-in fade-in duration-300">
            PropertyPortal
            </span>
        )}
        <button 
            onClick={() => setOpened(!opened)}
            className="p-1.5 rounded-md hover:bg-gray-100 text-gray-500 border border-transparent hover:border-gray-200 transition-colors ml-auto"
        >
            <Icon 
            icon={opened ? "tabler:chevron-left" : "tabler:chevron-right"} 
            width="20" 
            height="20" 
            />
        </button>
        </div>

        <div className="flex-grow">
        <Stack gap={6}>
            {links}
        </Stack>
        </div>

        <div className="mt-auto border-t border-gray-100 pt-4">
        <Tooltip label="Log Out" position="right" disabled={opened} transitionProps={{ duration: 0 }}>
            <button className="flex items-center w-full p-3 rounded-lg text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors group">
            <Icon icon="tabler:logout" width="24" height="24" />
            
            <div className={`overflow-hidden transition-all duration-300 ${opened ? 'w-auto ml-3 opacity-100' : 'w-0 opacity-0'}`}>
                <span className="font-medium text-sm whitespace-nowrap">Log Out</span>
            </div>
            </button>
        </Tooltip>
        </div>
    </nav>
    );
}