interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return <div className=" mb-[5%] w-full  bg-gray-100  dark:bg-gray-900 2xl:mx-auto">{children}</div>;
}
