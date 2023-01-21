interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return <div className=" mb-[5%] h-full w-full bg-gray-900">{children}</div>;
}
